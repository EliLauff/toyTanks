class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :player1_id
      t.integer :player2_id
      t.timestamps
    end
  end
end
