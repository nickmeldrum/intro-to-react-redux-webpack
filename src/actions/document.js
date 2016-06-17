export const RENAME_DOCUMENT = 'RENAME_DOCUMENT';

export function renameDocument(name) {
    return {
        type: RENAME_DOCUMENT,
        name
    };
};

