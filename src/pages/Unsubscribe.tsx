import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type State =
  | { status: "validating" }
  | { status: "ready" }
  | { status: "already" }
  | { status: "invalid" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>({ status: "validating" });

  useEffect(() => {
    if (!token) {
      setState({ status: "invalid" });
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } }
        );
        const data = await res.json();
        if (!res.ok) {
          setState({ status: "invalid" });
          return;
        }
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setState({ status: "already" });
          return;
        }
        if (data.valid) {
          setState({ status: "ready" });
          return;
        }
        setState({ status: "invalid" });
      } catch {
        setState({ status: "error", message: "Could not reach the server." });
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState({ status: "submitting" });
    try {
      const { data, error } = await supabase.functions.invoke(
        "handle-email-unsubscribe",
        { body: { token } }
      );
      if (error) {
        setState({ status: "error", message: error.message });
        return;
      }
      if (data?.success) {
        setState({ status: "success" });
      } else if (data?.reason === "already_unsubscribed") {
        setState({ status: "already" });
      } else {
        setState({ status: "error", message: "Unable to process request." });
      }
    } catch (e: any) {
      setState({ status: "error", message: e?.message ?? "Unknown error" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-card border border-border">
            <h1 className="font-heading text-3xl text-foreground mb-3">
              Email Preferences
            </h1>
            <p className="text-muted-foreground mb-8">
              Manage your subscription to communications from LAAAN Group.
            </p>

            {state.status === "validating" && (
              <div className="flex items-center gap-3 text-muted-foreground">
                <Loader2 className="w-5 h-5 animate-spin" />
                Verifying your link…
              </div>
            )}

            {state.status === "ready" && (
              <>
                <p className="text-foreground mb-6">
                  Click below to confirm you no longer wish to receive emails
                  from LAAAN Group.
                </p>
                <Button variant="hero" size="lg" onClick={confirm}>
                  Confirm Unsubscribe
                </Button>
              </>
            )}

            {state.status === "submitting" && (
              <div className="flex items-center gap-3 text-muted-foreground">
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing…
              </div>
            )}

            {state.status === "success" && (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">
                    You've been unsubscribed.
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    You will no longer receive emails from LAAAN Group.
                  </p>
                </div>
              </div>
            )}

            {state.status === "already" && (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">
                    You're already unsubscribed.
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    No further action is needed.
                  </p>
                </div>
              </div>
            )}

            {state.status === "invalid" && (
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">
                    Invalid or expired link.
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    This unsubscribe link is no longer valid. If you continue
                    to receive unwanted emails, please{" "}
                    <Link to="/contact" className="text-primary hover:underline">
                      contact us
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}

            {state.status === "error" && (
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Something went wrong.</p>
                  <p className="text-muted-foreground text-sm mt-1">{state.message}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
