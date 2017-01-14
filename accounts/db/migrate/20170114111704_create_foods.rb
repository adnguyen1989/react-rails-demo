class CreateFoods < ActiveRecord::Migration[5.0]
  def change
    create_table :foods do |t|
      t.string :description
      t.float :kcal
      t.float :protein_g
      t.float :carbohydrate_g
      t.float :sugar_g

      t.timestamps
    end
  end
end
