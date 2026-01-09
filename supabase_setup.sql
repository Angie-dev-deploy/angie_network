-- Create table for tracking newsletter clicks
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS newsletter_clicks (
  id BIGSERIAL PRIMARY KEY,
  newsletter_name TEXT NOT NULL,
  clicked_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create an index on newsletter_name for faster queries
CREATE INDEX IF NOT EXISTS idx_newsletter_clicks_name ON newsletter_clicks(newsletter_name);

-- Create an index on clicked_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_newsletter_clicks_clicked_at ON newsletter_clicks(clicked_at);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_clicks ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for tracking clicks)
-- but you can restrict reads if needed
CREATE POLICY "Allow public inserts for newsletter clicks"
  ON newsletter_clicks
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Optional: Create a policy that allows authenticated users to read all clicks
-- Remove this if you want to restrict read access
CREATE POLICY "Allow authenticated users to read newsletter clicks"
  ON newsletter_clicks
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: If you want to allow public reads (for displaying counts on the site)
-- Uncomment the following policy:
-- CREATE POLICY "Allow public reads for newsletter clicks"
--   ON newsletter_clicks
--   FOR SELECT
--   TO anon, authenticated
--   USING (true);
