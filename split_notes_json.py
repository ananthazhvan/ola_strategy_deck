import os
import json

SITE_DIR = "/home/ananth/finance/ola_strategy_deck/Knowledge_Base/site"
GRAPH_DATA_PATH = os.path.join(SITE_DIR, "graph_data.json")
NOTES_DATA_PATH = os.path.join(SITE_DIR, "notes_data.json")

# Category mapping to output file names
CATEGORY_MAP = {
    "Companies": "company.json",
    "Financial": "financial.json",
    "Market": "market.json",
    "Opportunities": "opportunity.json",
    "Risks": "risks.json",
    "Solutions": "solution.json",
    "Strategy": "strategy.json",
    "Technology": "technology.json"
}

def main():
    if not os.path.exists(GRAPH_DATA_PATH) or not os.path.exists(NOTES_DATA_PATH):
        print("Error: graph_data.json or notes_data.json not found in site directory.")
        return

    # Load data
    with open(GRAPH_DATA_PATH, 'r', encoding='utf-8') as f:
        graph_data = json.load(f)
    
    with open(NOTES_DATA_PATH, 'r', encoding='utf-8') as f:
        notes_data = json.load(f)

    # Build node_id to category mapping
    node_to_category = {}
    for node in graph_data.get("nodes", []):
        node_id = node.get("id")
        category = node.get("category", "Root")
        node_to_category[node_id] = category

    # Initialize collections for each JSON file
    split_contents = {filename: {} for filename in CATEGORY_MAP.values()}
    split_contents["others.json"] = {}  # for Root, Phantom, or any unexpected category

    # Group notes
    for node_id, content in notes_data.items():
        category = node_to_category.get(node_id, "Root")
        filename = CATEGORY_MAP.get(category, "others.json")
        split_contents[filename][node_id] = content

    # Write output files
    for filename, data in split_contents.items():
        output_path = os.path.join(SITE_DIR, filename)
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
        print(f"Saved {len(data)} nodes to {output_path}")

if __name__ == "__main__":
    main()
