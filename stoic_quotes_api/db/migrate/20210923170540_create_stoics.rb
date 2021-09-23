class CreateStoics < ActiveRecord::Migration[6.0]
  def change
    create_table :stoics do |t|
      t.string :name

      t.timestamps
    end
  end
end
