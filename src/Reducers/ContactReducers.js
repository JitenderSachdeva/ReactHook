export const ContactReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_CONTACT":
            return [...state, action.newContact];

        case "REMOVE_CONTACT":
            if (window.confirm("Are You really want to delete this contact")) {
                const filtered = state.filter(contact => contact.id !== action.id);
                return filtered;
            }
        default: return state;
    }
}