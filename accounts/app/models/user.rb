class User < ApplicationRecord
  validates_presence_of :name, :email, :department, :course
  validates_uniqueness_of :email
end
