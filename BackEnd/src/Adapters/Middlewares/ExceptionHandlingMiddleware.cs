using System.Text.Json;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Exceptions.User;

namespace DEMP_RPG_API.Adapters.Middlewares;

public class ExceptionHandlingMiddleware : IMiddleware
{
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(ILogger<ExceptionHandlingMiddleware> logger)
    {
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception during request");

            var (statusCode, message) = MapException(ex);

            if (statusCode >= 500)
            {
                // Não expor detalhes internos para erros não mapeados
                message = "Internal Server Error";
            }

            context.Response.StatusCode = statusCode;
            context.Response.ContentType = "application/json";

            var body = JsonSerializer.Serialize(new { message });
            await context.Response.WriteAsync(body);
        }
    }

    private static (int StatusCode, string Message) MapException(Exception ex) =>
        ex switch
        {
            EmailAlreadyExistsException => (StatusCodes.Status409Conflict, ex.Message),
            EmailIsNullOrWhiteSpaceException => (StatusCodes.Status400BadRequest, ex.Message),
            InvalidEmailException => (StatusCodes.Status400BadRequest, ex.Message),
            PasswordMustContainAtLeast6Exception => (StatusCodes.Status400BadRequest, ex.Message),
            EmailOrPasswordIncorrectException => (StatusCodes.Status401Unauthorized, ex.Message),
            UserNotFoundException => (StatusCodes.Status404NotFound, ex.Message),

            CharacterNotFoundException => (StatusCodes.Status404NotFound, ex.Message),
            CharacterSkillsNotFoundException => (StatusCodes.Status404NotFound, ex.Message),
            CharacterStatsNoFoundException => (StatusCodes.Status404NotFound, ex.Message),
            InvalidCharacterAttributeSkillException => (StatusCodes.Status400BadRequest, ex.Message),

            RoomNotFoundException => (StatusCodes.Status404NotFound, ex.Message),
            UserAlreadyInRoomException => (StatusCodes.Status409Conflict, ex.Message),

            _ => (StatusCodes.Status500InternalServerError, "Internal Server Error"),
        };
}
