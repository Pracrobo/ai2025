from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI()

# 모델은 dall-e-2 OR dall-e-3
# 사이즈 v2: 최대사이즈 1024x1024, 보통 512x512, 256x256
# 사이즈 v3: 최소사이즈 1024x1024, 보통 1024x1024, 1024x1792, 1792x1024
# 품질 : standard or hd
# 갯수 : v2: 여러개 가능, v3: 1개밖에 안됨

response = client.images.generate(
    model="dall-e-3",
    # prompt="A playful and friendly tiger character in the style of a classic Disney animated movie. The tiger has large expressive eyes, a soft round face, and slightly exaggerated cartoon proportions. Its orange fur is vibrant with clean black stripes, and its movements are lively and full of personality. The tiger is sitting in a lush jungle clearing with rays of sunlight filtering through the trees. It has a curious, cheerful expression, with its tail swaying and a paw playfully raised. The art style features warm colors, soft shading, and smooth linework typical of 2D Disney animation. High detail, magical and heartwarming atmosphere.",
    size="1024x1024",
    quality="hd",
    n=1
)

image_url = response.data[0].url
print(image_url)

# 이미지 다운로드 및 저장
import urllib
urllib.request.urlretrieve(image_url, "DATA/logo.png")