import json
import os

SOURCE_JSON = "/home/ananth/finance/ola_strategy_deck/Knowledge_Base/site/notes_data.json"
TARGET_JSON = "/home/ananth/finance/ola_strategy_deck/Slides/imp_data.json"

# List of nodes exactly as they appear in instructions.md
required_nodes = [
    # Slide 1
    "E2W Market India",
    "VAHAN_Market_Share_Story",
    "Subsidy_Cliff_Jul2026",
    "Legacy OEM Structural Advantage",
    "Chinese OEM Export Competition",
    "Mass Market E2W",
    
    # Slide 2
    "Brand Trust Deficit",
    "CCPA_Regulatory_Intervention",
    "Service_Center_Crisis",
    "Customer_Sentiment_Analysis",
    "Consumer Court Crisis",
    "Google Play Store Rating",
    "Social_Media_Sentiment",
    
    # Slide 3
    "Margin_Paradox",
    "Gigafactory_Updates",
    "Gen 2 Platform",
    "Operating Leverage",
    "Product_Mix_Cannibalization",
    "Quarterly Losses",
    "Unit Economics",
    
    # Slide 4
    "Competitor_Firepower",
    "Bajaj Auto",
    "TVS Motor",
    "Hero MotoCorp",
    "Ather Energy",
    
    # Slide 5
    "4680 Cell Tech",
    "LFP_46100_Cell",
    "Global Cell Price Parity",
    "Battery_Supply_Chain",
    "B2B_Battery_Pivot",
    "Cell Manufacturing",
    
    # Slide 6
    "GTM Strategy Project Horizon",
    "Decentralized Service Network",
    "Marketing Campaign Radical Transparency",
    "Zero-Tolerance QA",
    "Captive Financing and Affordability",
    
    # Slide 7
    "Customer Experience Gap",
    "Service Recovery Initiatives",
    
    # Slide 8
    "Investor Confidence Restoration",
    
    # Slide 9
    "Post-Subsidy Pricing Architecture",
    "S1 X",
    
    # Slide 10
    "The Ola Turnaround Strategy",
    "Motorcycle Market"
]

def extract_important_data():
    if not os.path.exists(SOURCE_JSON):
        print(f"Error: Could not find {SOURCE_JSON}")
        return

    with open(SOURCE_JSON, 'r', encoding='utf-8') as f:
        full_data = json.load(f)

    extracted_data = {}
    missing_nodes = []

    for node in required_nodes:
        if node in full_data:
            extracted_data[node] = full_data[node]
        else:
            missing_nodes.append(node)

    # Ensure target directory exists
    os.makedirs(os.path.dirname(TARGET_JSON), exist_ok=True)

    with open(TARGET_JSON, 'w', encoding='utf-8') as f:
        json.dump(extracted_data, f, indent=4)

    print(f"Successfully extracted {len(extracted_data)} nodes.")
    print(f"Saved to: {TARGET_JSON}")
    
    if missing_nodes:
        print("\nWARNING: The following requested nodes were not found in the source JSON:")
        for missing in missing_nodes:
            print(f"- {missing}")

if __name__ == "__main__":
    extract_important_data()
