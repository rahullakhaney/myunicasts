class AddSubjectIdToLibrary < ActiveRecord::Migration
  def change
    add_column :libraries, :subject_id, :integer
  end
end
