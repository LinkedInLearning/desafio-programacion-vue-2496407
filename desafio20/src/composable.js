import { ref } from 'vue'

export function useDraggable(id) {
    
    const dragable = ref(document.getElementById(id));
    
    dragable.value.draggable = true;
    
    dragable.value.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', id);
    })

    return { dragable }

}