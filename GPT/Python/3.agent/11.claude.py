import anthropic
from dotenv import load_dotenv

load_dotenv()
client = anthropic.Anthropic()

with client.message.create(
    model="claude-3-7-sonnet-20250219",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, world"}
    ]
)as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

# print(message.content)