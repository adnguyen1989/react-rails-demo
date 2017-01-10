class Timer < ApplicationRecord
  validates_presence_of :title, :project
end
