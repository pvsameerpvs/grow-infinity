import re

with open('components/Header.tsx', 'r') as f:
    text = f.read()

# Replace light/dark toggle background on the main header
text = text.replace('bg-white/95 dark:bg-black/95', 'bg-black/95')
text = text.replace('border-foreground/5', 'border-white/5')

# Replace text colors
text = text.replace('text-foreground/70 hover:text-foreground dark:text-white/80 dark:hover:text-white', 'text-white/80 hover:text-white')
text = text.replace('text-primary dark:text-white', 'text-white')
text = text.replace('text-foreground/60 hover:bg-foreground/[0.03] dark:text-white/60 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white', 'text-white/60 hover:bg-white/10 hover:text-white')
text = text.replace('text-foreground/60 dark:text-white/60 group-hover/link:text-primary dark:group-hover/link:text-white', 'text-white/60 group-hover/link:text-white')

# Replace generic dark/light utility combos
text = re.sub(r'bg-background dark:bg-black', 'bg-black', text)
text = re.sub(r'border-foreground/10 dark:border-white/10', 'border-white/10', text)
text = re.sub(r'bg-foreground/\[0.03\] dark:bg-white/10', 'bg-white/10', text)

# Region text
text = text.replace('text-foreground/80 hover:text-foreground', 'text-white/80 hover:text-white')

# Mobile menu icon / buttons
text = text.replace('text-foreground dark:text-white', 'text-white')
text = text.replace('hover:bg-foreground/5 dark:hover:bg-white/5', 'hover:bg-white/5')
text = text.replace('bg-background dark:bg-black', 'bg-black')
text = text.replace('border-foreground/5 dark:border-white/5', 'border-white/5')
text = text.replace('text-foreground/70 dark:text-white/70', 'text-white/70')
text = text.replace('bg-foreground/\[0.02\] dark:bg-white/\[0.02\]', 'bg-white/[0.02]')
text = text.replace('text-foreground/30 dark:text-white/30', 'text-white/30')
text = text.replace('text-foreground/60 dark:text-white/60', 'text-white/60')
text = text.replace('hover:text-primary dark:hover:text-white', 'hover:text-white')
text = text.replace('bg-foreground/5 dark:bg-white/5', 'bg-white/5')
text = text.replace('text-foreground/40 dark:text-white/40', 'text-white/40')
text = text.replace('bg-foreground/\[0.03\] dark:bg-white/\[0.03\]', 'bg-white/[0.03]')

# Clean up ThemeToggle block to just empty string or hidden since we are forcing dark theme
# The user wants "in light them also need dark them same header color need both time same header need"
# That means ThemeToggle is still there but header doesn't change color. 
# We don't necessarily have to remove ThemeToggle, just the background dynamic colors.

# Image logo: force hide black logo, force show white logo
text = text.replace('className="h-full w-auto object-contain dark:hidden"', 'className="h-full w-auto object-contain hidden"')
text = text.replace('className="h-full w-auto object-contain hidden dark:block"', 'className="h-full w-auto object-contain block"')

with open('components/Header.tsx', 'w') as f:
    f.write(text)

print("done")
