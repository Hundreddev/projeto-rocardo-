class VerifyWinner {
    constructor (ctx, placar) {
        this.ctx = ctx
        this.placar = placar
    }

    draw () {
        if (pontoJogador1 == 2 || pontoJogador2 == 2) {
            if (pontoJogador1>pontoJogador2) {
                setTimeout(() => {
                    textWinner = "CORINTHIANS";
                    placar.resetScore();
                }, 1000);
            }
            else {
                setTimeout(() => {
                    textWinner = "o bot venceu";
                    placar.resetScore();
                }, 1000);
            }
        }

        this.ctx.font = "70px arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(textWinner, 100, this.ctx.canvas.height-100, this.ctx.canvas.width);
    }
}