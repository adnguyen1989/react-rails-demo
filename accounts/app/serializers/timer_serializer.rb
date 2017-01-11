class TimerSerializer < ActiveModel::Serializer
  attributes :id, :title, :project, :elapsed
  attribute :runningSince
end
