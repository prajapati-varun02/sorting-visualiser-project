import { COMPARE_COLOR, FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, SWAP_COLOR, Swap, MIN_COLOR, disableAllButtons, delay, playNote } from "../Utilities/utils";

export async function selectionSort() {
	playNote(0);
	MakeDelay(200);
	disableAllButtons(true);
	var arr = document.querySelectorAll('.element-bar');
	document.getElementById("ssort").classList.add('btndisabled');
	var n = arr.length

	for (var i = 0; i < n; i++) {
		var min = i;
		arr[min].style.background = MIN_COLOR;
		playNote(500);
		await MakeDelay(delay);

		for (var j = i + 1; j < n; j++) {
			arr[j].style.background = COMPARE_COLOR;
			playNote(200 + (arr[j].clientHeight));
			await MakeDelay(delay);

			if (parseInt(arr[j].style.height) < parseInt(arr[min].style.height)) {
				arr[min].style.background = PRIMARY_COLOR;
				min = j;
				arr[min].style.background = MIN_COLOR;
				playNote(500);
				await MakeDelay(delay);
			}
			else {
				arr[j].style.background = PRIMARY_COLOR;
				await MakeDelay(delay);
			}

		}

		if (min !== i) {

			arr[i].style.background = SWAP_COLOR;
			arr[min].style.background = SWAP_COLOR;
			playNote(500);
			Swap(arr[min], arr[i]);
			await MakeDelay(delay);
			arr[min].style.background = PRIMARY_COLOR;
			arr[i].style.background = PRIMARY_COLOR;
		}

		arr[i].style.background = POSITION_FINAL_COLOR
		await MakeDelay(delay)
	}

	for (i = 0; i < n; i++) {
		arr[i].style.background = FINAL_COLOR;
		playNote(200 + (arr[i].clientHeight));
		await MakeDelay(delay)
	}
	document.getElementById("ssort").className = 'btn';
	disableAllButtons(false);
}