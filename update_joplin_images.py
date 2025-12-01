import os
import re

# Define the path to the Joplin blog directory (relative to where this script is run)
# We are in 'tyler-tree-service', so we go up two levels, then into joplin.
blog_dir = os.path.join('..', '..', 'joplin-mo-tree-services', 'joplin-tree-service', 'src', 'content', 'blog')

# Map filenames to specific images (using the numbered assets for variety)
image_map = {
    'bagworms-on-cedars-missouri.mdx': '/assets/1.jpg',
    'best-trees-to-plant-joplin-mo.mdx': '/assets/2.jpg',
    'black-walnut-tree-value-joplin.mdx': '/assets/3.jpg',
    'brush-removal-chipping-joplin.mdx': '/assets/4.jpg',
    'cost-of-tree-removal-joplin-2025.mdx': '/assets/5.jpg',
    'dangerous-tree-signs-joplin.mdx': '/assets/6.jpg',
    'emerald-ash-borer-joplin.mdx': '/assets/7.jpg',
    'emergency-tree-removal-joplin.mdx': '/assets/8.jpg',
    'homeowners-insurance-tree-removal-missouri.mdx': '/assets/9.jpg',
    'how-to-hire-tree-service-joplin.mdx': '/assets/10.jpg',
    'joplin-emergency-tree-safety-guide.mdx': '/assets/11.jpg',
    'joplin-tornado-tree-prep.mdx': '/assets/12.jpg',
    'joplin-tree-permits-ordinance.mdx': '/assets/13.jpg',
    'land-clearing-webb-city.mdx': '/assets/15.jpg',
    'missouri-ice-storm-tree-care.mdx': '/assets/16.jpg',
    'oak-wilt-missouri-guide.mdx': '/assets/17.jpg',
    'stump-grinding-rocky-soil.mdx': '/assets/18.jpg',
    'topping-vs-pruning-trees-joplin.mdx': '/assets/19.jpg',
    'watering-trees-drought-joplin.mdx': '/assets/20.jpg',
    'winter-pruning-benefits-joplin.mdx': '/assets/23.jpg'
}

print(f"Looking for blog files in: {os.path.abspath(blog_dir)}")

if not os.path.exists(blog_dir):
    print("Error: Blog directory not found.")
    exit(1)

for filename, image_path in image_map.items():
    file_path = os.path.join(blog_dir, filename)
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Regex to replace the image: line
        # Handles image: "..." or image: '...'
        new_content = re.sub(r'image: ["\'].*["\']', f'image: "{image_path}"', content)
        
        if content != new_content:
            with open(file_path, 'w') as f:
                f.write(new_content)
            print(f"Updated {filename} -> {image_path}")
        else:
            print(f"No change needed for {filename}")
    else:
        print(f"Warning: File not found {filename}")
