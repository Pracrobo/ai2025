document.addEventListener("DOMContentLoaded", async () => {
  await loadCards();
  saveButton();
  cardListEvent();
});

function saveButton() {
  const submitBtn = document.querySelector("#save");
  const titleInput = document.querySelector("#input-title");
  const textInput = document.querySelector("#input-text");

  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = await submitMemo(titleInput.value, textInput.value);
    if (data.message === "insert 성공") {
      alert("메모 저장!");
      titleInput.value = "";
      textInput.value = "";
      await loadCards();
    } else {
      alert("메모 저장이 되지 않았습니다!");
    }
  });
}

function cardListEvent() {
  document.querySelector("#card-list").addEventListener("click", async (e) => {
    const target = e.target;
    const id = target.getAttribute("data-id");

    if (target.classList.contains("updateBtn")) {
      await switchToEditMode(target);
    } else if (target.classList.contains("saveBtn")) {
      await saveEditedMemo(target, id);
    } else if (target.classList.contains("deleteBtn")) {
      await deleteMemo(target, id);
    }
  });
}

async function loadCards() {
  try {
    const response = await fetch("/api/memo", { method: "GET" });
    const cardlist = await response.json();
    showCards(cardlist);
  } catch (error) {
    console.error("카드 불러오기 실패:", error);
  }
}

function showCards(data) {
  const fragment = document.createDocumentFragment();
  const cardContainer = document.querySelector("#card-list");
  cardContainer.innerHTML = "";

  if (Array.isArray(data)) {
    data.forEach((item) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("col-md-3");
      cardDiv.innerHTML = `
          <div class="card-body">
            <span class="hidden" data-id="${item.id}">${item.id}</span>
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.contents}</p>
            <button type="button" class="btn btn-warning updateBtn" data-id="${item.id}">수정</button>
            <button type="button" class="btn btn-success deleteBtn" data-id="${item.id}">삭제</button>
          </div>
        `;
      fragment.appendChild(cardDiv);
    });
    cardContainer.appendChild(fragment);
  }

  document
    .querySelectorAll(".hidden")
    .forEach((span) => (span.style.display = "none"));
  document
    .querySelectorAll(".card-body")
    .forEach((card) => (card.style.margin = "10px"));
}

async function submitMemo(title, contents) {
  const response = await fetch("/memo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, contents }),
  });
  return await response.json();
}

async function switchToEditMode(button) {
  const cardBody = button.closest(".card-body");
  const titleElement = cardBody.querySelector(".card-title");
  const contentsElement = cardBody.querySelector(".card-text");

  const oldTitle = titleElement.innerText;
  const oldContents = contentsElement.innerText;

  titleElement.innerHTML = `<input type="text" class="form-control edit-title" value="${oldTitle}" />`;
  contentsElement.innerHTML = `<textarea class="form-control edit-text">${oldContents}</textarea>`;

  button.textContent = "저장";
  button.classList.remove("updateBtn");
  button.classList.add("saveBtn");
}

async function saveEditedMemo(button, id) {
  const cardBody = button.closest(".card-body");
  const newTitle = cardBody.querySelector(".edit-title").value;
  const newContents = cardBody.querySelector(".edit-text").value;

  try {
    const response = await fetch(`/memo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, contents: newContents }),
    });

    if (response.ok) {
      alert("수정되었습니다.");
      await loadCards();
    } else {
      alert("수정 실패!");
    }
  } catch (error) {
    console.error("수정 오류:", error);
    alert("수정 중 에러 발생!");
  }
}

async function deleteMemo(button, id) {
  if (!confirm("정말 삭제하시겠습니까?")) return;

  try {
    const response = await fetch(`/memo/${id}`, { method: "DELETE" });

    if (response.ok) {
      alert("삭제되었습니다.");
      await loadCards();
    } else {
      alert("삭제 실패!");
    }
  } catch (error) {
    console.error("삭제 오류:", error);
    alert("삭제 중 에러 발생!");
  }
}
