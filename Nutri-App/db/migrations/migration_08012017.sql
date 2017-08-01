CREATE TABLE IF NOT EXISTS nutri (
  id BIGSERIAL PRIMARY KEY,
  item_name VARCHAR(255),
  brand_name VARCHAR(255),
  calories INTEGER,
  total_fat INTEGER,
  carbs INTEGER
);

