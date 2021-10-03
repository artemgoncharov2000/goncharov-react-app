export const selectProjects = (state) => state.projects?.byId;
export const selectIsLoaded = (state) => state.projects?.isLoaded;
// export const selectCurrentProject = (state, projectId) => state.projects?.byId[projectId] ?? null;