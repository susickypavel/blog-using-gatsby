workflow "Production deployment" {
  resolves = [
    "Lint",
    "Type check",
    "Publish",
  ]
  on = "push"
}

action "Installation" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test" {
  uses = "nuxt/actions-yarn@master"
  args = "test"
  needs = ["Installation"]
}

action "Lint" {
  uses = "nuxt/actions-yarn@master"
  args = "test:lint"
  needs = ["Installation"]
}

action "Type check" {
  uses = "nuxt/actions-yarn@master"
  args = "test:tsc"
  needs = ["Installation"]
}

action "Publish" {
  uses = "netlify/actions/build@master"
  secrets = ["GITHUB_TOKEN", "NETLIFY_SITE_ID"]
  needs = ["Test", "Type check", "Lint"]
}
