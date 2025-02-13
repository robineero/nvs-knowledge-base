---
sidebar_position: 2
title: Setting up new account
description: ""
---

This page explains how to set up new Google Ads account.

## Starting point

Couple of things to know:

- Every advertising initiative should run on separate Google Ads account. If you start new initiative, create new Google Ads account.
- If you have created an account then the account should be registered in [OneRegistry](https://nvs-prod.appiancloud.com/suite/sites/1P1R). *Not sure as what and how. If we have managed to register the first account then we can use it as a template.*
- Payment by using procurement card. *At the moment we are waiting for the card and then figure out the billing details.*

## Hygiene

First things to do on your newly created account. This list can act as a checklist so that you know if you have done these things or not.

**Admin → Access and security → Security**

- 2-step verification: On
- Allowed domains: novartis.com

**Set manual CPC on campaign level**

[Manual CPC](https://support.google.com/google-ads/answer/2464960?hl=en&ref_topic=3119128&sjid=2298791795619457255-EU) can be set in campaign settings after you have created a campaign. This means than you have the most control over how much you pay for clicks. Here you can learn more about bidding strategies: [support.google.com/google-ads/answer/2472725](https://support.google.com/google-ads/answer/2472725)

- Campaigns → Overview → Filter a campaign → Settings → Bidding → Select bid strategy directly → **Manual CPC**

**Set campaign URL tracking options – Account level**

Admin → Account settings → Tracking → Tracking template → `{lpurl}?utm_source=google&utm_medium=cpc`

This ensures that if you forget to add tracking parameters on campaign, ad group or single ad level then account level values will be used. Also, there is no need to set these on any other level if they are the same. But in case you need to use different values in some cases, then values from lower level will override values set on higer level.

**Set campaign URL tracking options – Campaign level** (if different from account level)

Campaigns → Overview → Filter a campaign → Settings → Campaign URL options → Tracking template → `{lpurl}?utm_source=google&utm_medium=cpc`

If you like, you can also add (only) utm_campaign parameter on campaign level so that you could know which campaign delivers more traffic.

**Disable smart bidding**

Admin → Account settings → Customer Match → Remove the checkmark from "Use all Customer Match lists in Smart bidding and Optimized targeting"

**Account level sitelinks**

Campaign → Assets → Sitelinks
