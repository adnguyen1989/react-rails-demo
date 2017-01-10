class CreateTimers < ActiveRecord::Migration[5.0]
  def change
    create_table :timers do |t|
      t.string :title
      t.string :project
      t.integer :elapsed, default: 0
      t.integer :runningSince, limit: 8, default: nil

      t.timestamps
    end
  end
end
