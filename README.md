# Faculty Deliverables Monitoring System

React + Vite front-end prototype for the College of Information Technology Education, Nueva Vizcaya State University, Bayombong Campus.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build, run `npm run build` and optionally `npm run preview`.

## Prototype features

- Dashboard with live counts, charts, deadline overview, and recent activity.
- Faculty directory with search, specialization/employment filters, details, and add/edit/delete forms.
- Deliverable creation and editing with category, deadline, priority, requirements, and multiple faculty assignments.
- Submission monitoring with status updates, reviewer feedback, status history, and CSV export.
- Faculty portal for checking requirements and submitting a file-name reference and remarks.
- Monthly deadline calendar and deadline filters.
- Filterable report preview, CSV export, and browser print layout.
- Simulated user management, notification center, settings, and dark theme.
- Role switcher for Administrator, Monitoring Personnel, and Faculty Member demonstration views.
- Fictional sample data, persisted with browser `localStorage`, plus a reset option.

## Demo limitations

This is a browser-only academic prototype. It has no production authentication or access control, backend database, server-side file storage, or email/SMS delivery. Role switching demonstrates the intended experiences and is not a security boundary. Submission references are text only; print uses the browser's print dialog and does not generate an official PDF. All sample identities and email addresses are fictional.
