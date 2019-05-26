export function firebaseReferenceToArray(reference) {
    const children = [];
    reference.forEach(child => { children.push(child) });
    return children;
}
