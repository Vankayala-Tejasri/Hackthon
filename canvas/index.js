document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width=300
    canvas.height=300

    function draw(num) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.beginPath()
         ctx.lineWidth=2;
         ctx.strokeStyle="black"
        const coordinates = {
            1: [[100, 100]],
            2: [[50, 50], [150, 150]],
            3: [[50, 50], [100, 100], [150, 150]],
            4: [[50, 50], [50, 150], [150, 50], [150, 150]],
            5: [[50, 50], [50, 150], [100, 100], [150, 50], [150, 150]],
            6: [[50, 50], [50, 100], [50, 150], [150, 50], [150, 100], [150, 150]]
        };

        coordinates[num].forEach(x => {
            ctx.beginPath();
            ctx.arc(x[0], x[1], 10, 0, Math.PI * 2, true);
            ctx.fill();
        });
    }

    function rollDice() {
        const num = Math.floor(Math.random() * 6) + 1;
        draw(num);
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            rollDice();
        }
    });

     rollDice();
});