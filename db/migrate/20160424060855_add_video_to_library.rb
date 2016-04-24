class AddVideoToLibrary < ActiveRecord::Migration
  def change
    add_column :libraries, :video, :string
    add_column :libraries, :github, :string
  end
end
