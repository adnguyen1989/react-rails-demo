class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :department, :course
end
