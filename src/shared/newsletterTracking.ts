import { supabase } from "./supabase";

export interface NewsletterClick {
  id?: number;
  newsletter_name: string;
  clicked_at?: string;
}

/**
 * Tracks a click on a newsletter PDF
 * @param newsletterName - The name/title of the newsletter
 * @returns Promise that resolves when the click is tracked
 */
export async function trackNewsletterClick(
  newsletterName: string
): Promise<void> {
  if (!supabase) {
    console.warn("Supabase is not configured. Click not tracked.");
    return;
  }

  try {
    const { error } = await supabase.from("newsletter_clicks").insert({
      newsletter_name: newsletterName,
      clicked_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Error tracking newsletter click:", error);
    }
  } catch (error) {
    console.error("Failed to track newsletter click:", error);
  }
}

/**
 * Gets the total click count for a specific newsletter
 * @param newsletterName - The name/title of the newsletter
 * @returns Promise that resolves with the click count
 */
export async function getNewsletterClickCount(
  newsletterName: string
): Promise<number> {
  if (!supabase) {
    return 0;
  }

  try {
    const { count, error } = await supabase
      .from("newsletter_clicks")
      .select("*", { count: "exact", head: true })
      .eq("newsletter_name", newsletterName);

    if (error) {
      console.error("Error getting click count:", error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error("Failed to get click count:", error);
    return 0;
  }
}

/**
 * Gets click counts for all newsletters
 * @returns Promise that resolves with a map of newsletter names to click counts
 */
export async function getAllNewsletterClickCounts(): Promise<
  Record<string, number>
> {
  if (!supabase) {
    return {};
  }

  try {
    const { data, error } = await supabase
      .from("newsletter_clicks")
      .select("newsletter_name");

    if (error) {
      console.error("Error getting all click counts:", error);
      return {};
    }

    const counts: Record<string, number> = {};
    if (data) {
      data.forEach((click) => {
        counts[click.newsletter_name] =
          (counts[click.newsletter_name] || 0) + 1;
      });
    }

    return counts;
  } catch (error) {
    console.error("Failed to get all click counts:", error);
    return {};
  }
}
