class PlayersController < ApplicationController

    # def index 
    # end

    # def show 
    #     Player.find{player_params}
    #     # Player.find(params[:id])
    # end

    

    def index
        render json: Player.all 
    end

    def create
        player = Player.create(player_params)
        render json: match
    end

    def show 
        render json: Player.find(params[:id])
    end

    def player_params
        params.require(:player).permit(:name, :wins, :losses)
    end

end
