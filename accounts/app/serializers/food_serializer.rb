class FoodSerializer < ActiveModel::Serializer
  attributes :id, :description, :kcal, :protein_g, :carbohydrate_g, :sugar_g
end
