class MatchesController < ApplicationController

    def index
        render json: Match.all 
    end

    def create
        match = Match.create(match_params)
        render json: match
    end

    def show 
        render json: Match.find(params[:id])
    end

    def match_params
        params.permit(:player1_id, :player2_id)
    end

end
