function BookingForm() {
  const $choiceOfBooking = document.getElementById("booking");

  $choiceOfBooking.addEventListener("change", function () {
    const $dynamicField = document.getElementById("dynamic-fields");
    $dynamicField.innerHTML = "";

    const $inputBox = document.createElement("div");
    $inputBox.classList = "input-box";
    const $dateLabel = document.createElement("label");
    $dateLabel.textContent = "Select Date";

    const $dateInput = document.createElement("input");
    $dateInput.id = "dateEle";
    $dateInput.type = "date";

    $inputBox.append($dateLabel, $dateInput);
    $dynamicField.appendChild($inputBox);

    if (this.value === "half-day") {
      const $inputBox = document.createElement("div");
      $inputBox.classList = "input-box";
      const $slotLabel = document.createElement("label");
      $slotLabel.textContent = "Select Slot";

      const $slotSelect = document.createElement("select");
      $slotSelect.id = "slot";

      ["Breakfast", "lunch", "dinner"].forEach((slot) => {
        const $option = document.createElement("option");
        $option.value = slot.toLowerCase();
        $option.textContent = slot;
        $slotSelect.appendChild($option);
      });

      $inputBox.append($slotLabel, $slotSelect);
      $dynamicField.appendChild($inputBox);
    }

    if (this.value === "hourly") {
      const $inputBox = document.createElement("div");
      $inputBox.classList = "input-box";

      const $timeLabel = document.createElement("label");
      $timeLabel.textContent = "Select Time";

      const $timeInput = document.createElement("input");
      $timeInput.id = "timeEle";
      $timeInput.type = "time";

      $inputBox.append($timeLabel, $timeInput);
      $dynamicField.appendChild($inputBox);
    }
  });

  document
    .getElementById("bookingForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("booking confirm");
      this.reset();
    });
}

BookingForm();
