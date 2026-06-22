export function rollD100(targetValue) {
    const value = Math.floor(Math.random() * 100) + 1;
    
    const half = Math.floor(targetValue / 2);
    const fifth = Math.floor(targetValue / 5);

    let label = "Falha";
    let tier = "fail";

    // 1. Verificar Sucessos primeiro (do melhor para o pior)
    if (value === 1) {
        label = "Crítico"; // 1 é sempre Crítico absoluto
        tier = "critical";
    } else if (value <= fifth) {
        label = "Sucesso Extremo";
        tier = "extreme";
    } else if (value <= half) {
        label = "Sucesso Bom";
        tier = "hard";
    } else if (value <= targetValue) {
        label = "Sucesso Regular";
        tier = "success";
    } 
    // 2. Se não foi sucesso, verificar se é uma Falha Crítica (Desastre / Fumble)
    else if (targetValue < 50 && value >= 96) {
        label = "Desastre";
        tier = "fumble";
    } else if (targetValue >= 50 && value === 100) {
        label = "Desastre";
        tier = "fumble";
    }
    // 3. Se não cair em nada anterior, é apenas uma Falha normal
    else {
        label = "Falha";
        tier = "fail";
    }

    return { value, label, tier };
}