class Match < ApplicationRecord
    belongs_to :player1, class_name: "Player", :foreign_key => "player2_id"
    belongs_to :player2, class_name: "Player", :foreign_key => "player1_id"
end
