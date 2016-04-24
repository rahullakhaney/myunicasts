class AddDescriptionToLibrary < ActiveRecord::Migration
  def change
    add_column :libraries, :description, :text
  end
end
