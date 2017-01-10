class TimerSerializer < ActiveModel::Serializer
  attributes :id, :project, :elapsed
  attribute :runningSince
end
