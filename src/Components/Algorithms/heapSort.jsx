import { delay, FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, COMPARE_COLOR, SWAP_COLOR, Swap, disableAllButtons, playNote, } from "../Utilities/utils";

async function heapify(arr, n, i) {
    var largest = i; // Initializing largest element as the root
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    arr[largest].style.background = COMPARE_COLOR;
    if (l < n && parseInt(arr[l].style.height) > parseInt(arr[largest].style.height)) {
        arr[l].style.background = COMPARE_COLOR;
        largest = l;
    }

    if (r < n && parseInt(arr[r].style.height) > parseInt(arr[largest].style.height)) {
        arr[r].style.background = COMPARE_COLOR;
        largest = r;
    }
    playNote(200 + (arr[largest].clientHeight));
    await MakeDelay(delay);

    if (r < n) arr[r].style.background = PRIMARY_COLOR;
    if (l < n) arr[l].style.background = PRIMARY_COLOR;


    if (largest !== i) {
        arr[largest].style.background = SWAP_COLOR;
        arr[i].style.background = SWAP_COLOR;
        playNote(500);
        Swap(arr[i], arr[largest]);
        await MakeDelay(delay);
        arr[i].style.background = PRIMARY_COLOR;
        arr[largest].style.background = PRIMARY_COLOR;

        await heapify(arr, n, largest);
    }
    else {
        arr[largest].style.background = SWAP_COLOR;
        playNote(500);
        await MakeDelay(delay);
        arr[largest].style.background = PRIMARY_COLOR;
    }
}

export async function heapSort() {
    playNote(0);
    MakeDelay(200);
    disableAllButtons(true);
    var arr = document.querySelectorAll('.element-bar');
    document.getElementById("hsort").classList.add('btndisabled');
    var n = arr.length;

    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }
    // One by one extract an element from heap
    for (i = n - 1; i > 0; i--) {
        arr[0].style.background = SWAP_COLOR;
        arr[i].style.background = SWAP_COLOR;
        playNote(500);
        Swap(arr[i], arr[0]);
        await MakeDelay(delay);
        arr[i].style.background = POSITION_FINAL_COLOR;
        playNote(200 + (arr[i].clientHeight));
        await heapify(arr, i, 0);
    }

    for (i = 0; i < n; i++) {
        arr[i].style.background = FINAL_COLOR;
        playNote(200 + (arr[i].clientHeight));
        await MakeDelay(delay);
    }

    document.getElementById("hsort").className = 'btn';
    disableAllButtons(false);
}
