from diffusers import StableDiffusionPipeline
## 스테이블 디퓨전
## https://github.com/kyopark2014/stable-diffusion-api-server
pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5").to("cpu")

prompt = "A fufuristic city at sunset, digital art"
image = pipe(prompt).images[0]
image.save("flux-dev.png")
print("이미지 생성 완료")
