import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Target, BarChart3, ArrowRight, Check } from "lucide-react";
import BlurText from "./motion/blur-text"
import { BgSquares } from "./backgrounds";
import GradientText from "./motion/gradient-text";
import ShinyText from "./motion/shiny-text";
import FadeContent from "./motion/fade-content";

export function LandingPage() {
    return (
        <div className="dark">            {/* Background - Fixed behind everything */}
            <div className="fixed left-0 top-0 -z-10 h-screen w-screen">
                <BgSquares />
            </div>

            <div className="relative min-h-screen scroll-smooth">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center container mx-auto px-4">
                    <div className="space-y-6 text-center max-w-4xl">
                        <div className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                            <BlurText
                                text="Boost Your Sales with "
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="inline"
                            />
                            <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0}>
                                <GradientText
                                    colors={["#3b82f6", "#8b5cf6", "#3b82f6"]} // blue to purple gradient
                                    animationSpeed={6}
                                    showBorder={false}
                                    className="inline text-4xl md:text-6xl font-bold"
                                >
                                    <b>Slerate</b>
                                </GradientText>
                            </FadeContent>
                        </div>

                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Transform your sales process with our AI-powered platform.
                            Increase conversions, automate follow-ups, and close more deals faster than ever before.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="default" className="bg-background outline-1 text-white hover:bg-zinc-900 ">
                                <ShinyText text="Get Started!" disabled={false} speed={3} className='text-zinc-400' />
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 justify-center">
                            <div className="flex items-center gap-1">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>14-day free trial</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-4 py-16 md:py-24 ">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Powerful Features for Sales Success
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Everything you need to supercharge your sales process and drive results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 outline-1 outline-zinc-800">
                            <CardHeader className="text-center">
                                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <CardTitle className="text-xl">AI-Powered Analytics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center text-base">
                                    Get real-time insights into your sales performance with advanced AI analytics.
                                    Identify trends, predict outcomes, and make data-driven decisions.
                                </CardDescription>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Predictive sales forecasting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Performance tracking & reporting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Custom dashboard creation</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 outline-1 outline-zinc-800">
                            <CardHeader className="text-center">
                                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                                </div>
                                <CardTitle className="text-xl">Smart Lead Management</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center text-base">
                                    Automatically score, prioritize, and nurture your leads with intelligent automation.
                                    Never miss a hot prospect again.
                                </CardDescription>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Automated lead scoring</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Intelligent lead routing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Personalized follow-up campaigns</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 outline-1 outline-zinc-800">
                            <CardHeader className="text-center">
                                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <CardTitle className="text-xl">Conversion Optimization</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center text-base">
                                    Optimize your sales funnel with A/B testing, behavioral tracking, and
                                    conversion rate optimization tools.
                                </CardDescription>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>A/B testing framework</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Behavioral analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Funnel optimization tools</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 py-16 md:py-24">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Transform Your Sales?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Join thousands of sales teams who have already boosted their performance with Slerate.
                            Start your free trial today and see results in just 7 days.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                Schedule Demo
                            </Button>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4" />
                                <span>Free 14-day trial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4" />
                                <span>No setup fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4" />
                                <span>Cancel anytime</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}            <footer className="container mx-auto px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                    <p>&copy; 2025 Slerate Sales Boost. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
