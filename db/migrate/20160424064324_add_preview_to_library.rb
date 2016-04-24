class AddPreviewToLibrary < ActiveRecord::Migration
  def change
    add_column :libraries, :preview, :string
  end
end
