from django.db import models
from django.contrib.postgres.fields import JSONField


class Currency(models.Model):
    code = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    symbol = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name

class Language(models.Model):
    iso639_1 = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    nativeName = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name


class RegionalBloc(models.Model):
    acronym = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    otherAcronyms = JSONField(null=True, blank=True)
    otherNames = JSONField(null=True, blank=True)

    def __str__(self):
        return self.acronym

class Country(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    topLevelDomain = JSONField(null=True, blank=True)
    alpha2Code = models.CharField(max_length=255, null=True, blank=True)
    alpha3Code = models.CharField(max_length=255, null=True, blank=True)
    callingCodes = JSONField(null=True, blank=True)
    capital = models.CharField(max_length=255, null=True, blank=True)
    altSpellings = JSONField(null=True, blank=True)
    region = models.CharField(max_length=255, null=True, blank=True)
    subregion = models.CharField(max_length=255, null=True, blank=True)
    population = models.IntegerField(null=True, blank=True)
    latlng = JSONField(null=True, blank=True)
    demonym = models.CharField(max_length=255, null=True, blank=True)
    area = models.FloatField(null=True, blank=True)
    gini = models.FloatField(null=True, blank=True)
    timezones = JSONField(null=True, blank=True)
    borders = JSONField(null=True, blank=True)
    nativeName = models.CharField(max_length=255, null=True, blank=True)
    numericCode= models.CharField(max_length=255, null=True, blank=True)
    currencies = models.ManyToManyField(Currency)
    languages = models.ManyToManyField(Language)
    flag = models.CharField(max_length=255, null=True, blank=True)
    regionalBlocs = models.ManyToManyField(RegionalBloc, blank=True)
    cioc = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name
