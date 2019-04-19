class MatchesController < ApplicationController

    def index
        render json: Match.all 
    end

    def create
        match = Match.create(match_params)
        # render json: match
    end

    def show 
        render json: Match.find(params[:id])
    end

    def match_params
        params.permit(player1_id: Player.find_by(name: :player_one_name).id, player2_id: Player.find_by(name: :player_two_name).id)
    end

end
