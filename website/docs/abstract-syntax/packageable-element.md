---
sidebar_position: 12
description: The PackageableElement abstract union — any model element that can be grouped into a package.
---

# Packageable Element

A **model element that can be grouped into a [package](./package.md)** — that is, the kind of
element allowed in a package's `contents` array.

`PackageableElement` is **abstract**: it is never serialized on its own and has no `type` of its
own. It is a union rather than a type with properties of its own. A packageable element is one of:

- a [`Classifier`](./classifier.md) — a [class](./class.md) or a [relation](./relation.md);
- a [generalization](./generalization.md);
- a [generalization set](./generalization-set.md);
- an [anchor](./anchor.md);
- a [note](./note.md); or
- a [package](./package.md) itself (allowing packages to nest).

Note that [properties](./property.md) are **not** packageable: an attribute or relation end belongs
to its owning [classifier](./classifier.md), which lists it in `properties`, rather than directly to
a package.

This union mirrors the [packageable elements](./index.md#packageable-elements) summarized on the
overview page.
