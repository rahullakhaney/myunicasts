class AddReadtimeToLesson < ActiveRecord::Migration
  def change
    add_column :lessons, :read_time, :string
  end
end
