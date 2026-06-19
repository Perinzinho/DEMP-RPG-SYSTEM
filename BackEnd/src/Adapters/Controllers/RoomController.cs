using DEMP_RPG_API.Application.DTOs.Request.Room;
using DEMP_RPG_API.Application.UseCases.Room;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DEMP_RPG_API.Adapters.Controllers;
[ApiController]
[Route("rooms")]
[Authorize]
public class RoomController:ControllerBase
{
    private readonly CreateRoomUseCase _createRoomUseCase;
    private readonly DeleteRoomUseCase _deleteRoomUseCase;
    private readonly GetAllRoomsUseCase _getAllRoomsUseCase;
    private readonly GetRoomByIdUseCase _getRoomByIdUseCase;
    private readonly GetRoomByCodeUseCase _getRoomByCodeUseCase;
    private readonly UpdateRoomUseCase _updateRoomUseCase;
    
    public RoomController(CreateRoomUseCase createRoomUseCase,
        DeleteRoomUseCase deleteRoomUseCase,
        GetAllRoomsUseCase getAllRoomsUseCase,
        GetRoomByIdUseCase getRoomByIdUseCase,
        GetRoomByCodeUseCase getRoomByCodeUseCase,
        UpdateRoomUseCase updateRoomUseCase)
        {
        _createRoomUseCase = createRoomUseCase;
        _deleteRoomUseCase = deleteRoomUseCase;
        _getAllRoomsUseCase = getAllRoomsUseCase;
        _getRoomByIdUseCase = getRoomByIdUseCase;
        _getRoomByCodeUseCase = getRoomByCodeUseCase;
        _updateRoomUseCase = updateRoomUseCase;
        }

    [HttpPost]
    public async Task<IActionResult> CreateRoom([FromBody] CreateRoomRequestDTO dto)
    {
        await _createRoomUseCase.CreateRoom(dto);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRoom(Guid id)
    {
        await _deleteRoomUseCase.DeleteRoom(id);
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetAllRooms()
    {
        var result =await _getAllRoomsUseCase.GetAllRooms();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetRoom(Guid id)
    {
        var result = await _getRoomByIdUseCase.GetRoomById(id);
        return Ok(result);
    }

    [HttpGet("room/{code}")]
    public async Task<IActionResult> GetRoomByCode(string code)
    {
        var result = await _getRoomByCodeUseCase.GetRoomByCode(code);
        return Ok(result);
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateRoom(Guid id, [FromBody] UpdateRoomRequestDTO dto)
    {
        var result = await _updateRoomUseCase.UpdateRoom(id, dto);
        return Ok(result);
    }
}