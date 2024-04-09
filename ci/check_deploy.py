import os, re

tag = os.getenv("PLUGIN_TAG")

def check_is_semver(tag):
    if not re.match(r"\d+\.\d+\.\d+", tag):
        print("Tag is not a valid semver!")
        exit(1)

def get_current_semver():
    #./deployment/deployment.yml
    with open("deployment/deployment.yml", "r") as f:
        contents = f.read()
    match = re.search(r"reg\.everbuild\.org/asorda-frontend:(\d+\.\d+\.\d+)", contents)
    if not match:
        print("Could not find current semver in deployment file!")
        exit(1)
    return match.group(1)


def semver_intify(semver):
    major, minor, patch = semver.split(".")
    return int(major) * 100000 + int(minor) * 1000 + int(patch)


current_semver = get_current_semver()
check_is_semver(tag)

if current_semver == tag:
    print("Tag is the same as the current semver!")
    exit(1)

if semver_intify(tag) < semver_intify(current_semver):
    print("Tag is less than the current semver!")
    exit(1)

print("Tag is a valid semver!")

branch = os.getenv("BRANCH")
if not branch:
    print("No branch set!")
    exit(1)

exit(0)
