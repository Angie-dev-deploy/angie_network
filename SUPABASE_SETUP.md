# Supabase Setup Guide for Newsletter Click Tracking

This guide will help you set up Supabase to track newsletter clicks in your ANGIE Network application.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in your project details:
   - **Name**: Choose a name (e.g., "angie-network")
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the region closest to your users
5. Click "Create new project" and wait for it to be ready (2-3 minutes)

## Step 2: Create the Database Table

1. In your Supabase project dashboard, go to the **SQL Editor** (left sidebar)
2. Click "New query"
3. Copy and paste the contents of `supabase_setup.sql` into the editor
4. Click "Run" to execute the SQL
5. You should see a success message

This will create:
- A `newsletter_clicks` table to store click events
- Indexes for better query performance
- Row Level Security (RLS) policies for data access

## Step 3: Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** (gear icon in left sidebar)
2. Click on **API** in the settings menu
3. You'll find:
   - **Project URL** (this is your `VUE_APP_SUPABASE_URL`)
   - **anon/public key** (this is your `VUE_APP_SUPABASE_ANON_KEY`)

Copy both of these values - you'll need them in the next step.

## Step 4: Configure Environment Variables for Local Development

1. Create a `.env` file in the root of your `angie_network` directory (if it doesn't exist)
2. Add the following variables:

```env
VUE_APP_SUPABASE_URL=your_project_url_here
VUE_APP_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace `your_project_url_here` and `your_anon_key_here` with the values from Step 3.

**Important**: Add `.env` to your `.gitignore` file to keep your credentials secure!

## Step 5: Configure Environment Variables for Netlify

Since your app is deployed on Netlify, you need to add the environment variables there:

1. Go to your Netlify dashboard
2. Navigate to your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable** and add:
   - **Key**: `VUE_APP_SUPABASE_URL`
   - **Value**: Your Supabase project URL
5. Click **Add a variable** again and add:
   - **Key**: `VUE_APP_SUPABASE_ANON_KEY`
   - **Value**: Your Supabase anon/public key
6. After adding the variables, you'll need to **redeploy** your site for the changes to take effect

### How to Redeploy on Netlify:

- **Option 1**: Trigger a new deploy manually
  - Go to **Deploys** tab
  - Click **Trigger deploy** → **Deploy site**
  
- **Option 2**: Push a new commit to your repository (if connected to Git)
  - This will automatically trigger a new deploy

## Step 6: Verify the Setup

1. After redeploying, visit your site
2. Click on a newsletter PDF link
3. Go to your Supabase dashboard → **Table Editor**
4. You should see a new row in the `newsletter_clicks` table with:
   - The newsletter name
   - A timestamp of when it was clicked

## Viewing Click Statistics

You can view click statistics in several ways:

### Option 1: Supabase Dashboard
- Go to **Table Editor** → `newsletter_clicks`
- You'll see all click records

### Option 2: Supabase SQL Editor
Run queries like:

```sql
-- Get total clicks per newsletter
SELECT 
  newsletter_name, 
  COUNT(*) as click_count
FROM newsletter_clicks
GROUP BY newsletter_name
ORDER BY click_count DESC;

-- Get clicks in the last 7 days
SELECT 
  newsletter_name, 
  COUNT(*) as click_count
FROM newsletter_clicks
WHERE clicked_at >= NOW() - INTERVAL '7 days'
GROUP BY newsletter_name;
```

### Option 3: Build an Admin Dashboard (Future Enhancement)
You could create an admin page in your Vue app that uses the `getAllNewsletterClickCounts()` function from `newsletterTracking.ts` to display statistics.

## Security Notes

- The `anon` key is safe to use in client-side code (it's designed for this)
- Row Level Security (RLS) is enabled to control data access
- The current setup allows anyone to insert clicks (for tracking) but you can restrict reads if needed
- Never commit your `.env` file or expose your `service_role` key

## Troubleshooting

### Clicks aren't being tracked
1. Check browser console for errors
2. Verify environment variables are set correctly in Netlify
3. Make sure you've redeployed after adding environment variables
4. Check Supabase dashboard → **Logs** for any errors

### "Supabase is not configured" warning
- This means the environment variables aren't set
- Double-check your `.env` file (local) or Netlify environment variables (production)
- Make sure variable names start with `VUE_APP_` (required for Vue CLI to expose them)

### RLS Policy Errors
- If you get permission errors, check the RLS policies in Supabase
- Make sure the policies allow inserts from anonymous users

## Next Steps

- Consider adding a dashboard to view click statistics
- You could add more metadata (user agent, IP, etc.) if needed
- Set up alerts or notifications for high click counts
- Export data periodically for analysis
