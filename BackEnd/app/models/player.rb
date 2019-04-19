class Player < ApplicationRecord
    has_many :matches_as_player1, :class_name => "Match", :foreign_key => "player1_id"
    has_many :matches_as_player2, :class_name => "Match", :foreign_key => "player2_id"
    has_many :player1s_as_player2, :through => :matches_as_player2, :source => :player1
    has_many :player2s_as_player1, :through => :matches_as_player1, :source => :player2
end
