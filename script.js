document.getElementById('getActivity').addEventListener('click', async () => {
    try {
        document.getElementById('activityOutput').innerHTML = '<p>Загрузка...</p>';

        const response = await fetch('http://localhost:3000/proxy/bored/random');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP ${response.status}: ${await response.text()}`);
        }

        const activityData = await response.json();
        
        document.getElementById('activityOutput').innerHTML = `
            <p><strong>Занятие:</strong> ${activityData.activity}</p>
            <p><strong>Тип:</strong> ${activityData.type}</p>
            <p><strong>Участники:</strong> ${activityData.participants}</p>
        `;
    } catch(error) {
        console.error('Ошибка:', error.message);
        document.getElementById('activityOutput').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});

