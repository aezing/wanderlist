# Generated by Django 2.1.2 on 2018-11-14 16:26

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0006_auto_20181114_1625'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tripreport',
            name='date_posted',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]